# SPFX

## First Step Setup:
<ol>
  <li>npm install -g yo gulp ( instal Yeoman and Gulp )</li>
  <li>npm install -g @microsoft/generator-sharepoint ( install Sharepoint code generator  )</li>
</ol>

## Sharepoint create App Catalog:
<ol>
  <li>Sharepoint admin Center</li>
  <li>More features</li>
  <li>Apps - Click Open</li>
  <li>App Catalog</li>
  <li>Create a new app catalog site</li>
  <li>Add site Collection data</li>
  <li>At the 'Active Sites' you'l find your catalog</li>
</ol>

## Create Sharepoint solution
<ol>
  <li>yo @microsoft/sharepoint</li>
  <li>gulp trust-dev-cert</li>
  <li>gulp serve</li>
</ol>

## Sharepoint properties
<ol>
  <li>
  
  ````typescript
      this.properties.description;
  ````

  </li>
  <li>  

  ````typescript
      this.context.pageContext.web.absoluteURL;
  ````

  </li>
  <li>  

  ````typescript
      this.context.pageContext.web.title;
  ````

  <li>

  ````typescript
      this.context.pageContext.web.serverRelativeURL;
  ````

  </li>
    <li>

  ````typescript
      this.context.pageContext.user.displayName;
  ````

  </li>

</ol>