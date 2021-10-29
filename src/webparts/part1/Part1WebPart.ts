import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Part1WebPart.module.scss';
import * as strings from 'Part1WebPartStrings';

export interface IPart1WebPartProps {
  description: string;
}

export default class Part1WebPart extends BaseClientSideWebPart<IPart1WebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.part1 }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Teszt oldal</span>
              <p class="${ styles.subTitle }">Tetszőlegesen tudom állítani a webpart kijelző tartalmát.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <a href="https://github.com/Motkany1980/SPFX" class="${ styles.button }" target="_blank">
                <span class="${ styles.label }">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
