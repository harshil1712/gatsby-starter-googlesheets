<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Google Sheets
</h1>

Kick off your project with this boilerplate. This starter ships with the main Gatsby configuration files along with the gatsby-source-google-spreadsheet you might need to get up and running blazing fast with the blazing fast app generator for React.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the starter
    gatsby new gatsby-site https://github.com/harshil1712/gatsby-starter-googlesheets
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd gatsby-site/
    ```

1.  **Open the source code and start editing!**

    Before running the development server you will need to add credentials to the .env file.
    
    ```sh
    SPREADSHEET_ID=<YOUR_SPREADHEET_ID>
    CLIENT_EMAIL=<SERVICE_ACCOUNT_EMAIL>
    PRIVATE_KEY=<YOUR_PRIVATE_KEY>
    ```
    You can get the `SPREADSHEET_ID` from the URL of your sheet, `https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit#gid=12345`.
    You will have to create a service account which will provide you with the service account email id and a private key. To know more about creating service account you can visit [here](https://support.google.com/a/answer/7378726?hl=en). After creating a service account share your sheet with edit permission with the given email id.

    ```sh
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


