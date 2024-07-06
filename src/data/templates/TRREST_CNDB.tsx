import { type Template } from "@site/src/types";

export const sample: Template = {
  description:
    "This project covers all the test cases of REST trigger and DB connector.",
  services: [
    {
      serviceName: "getSingleRecord",
      description:
        "Get single record from the database(customer table) and tranform it to REST response.",
      output: JSON.stringify(
        { ID: "100", Name: "Rajat Kulkarni", City: "Boston", Country: "USA" },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getSingleRecord?id=100",
      },
    },
    {
      serviceName: "getMultipleRecord",
      description:
        "Get multiple records from the database(customer table) and tranform it to REST response.",
      output: JSON.stringify(
        {
          Customers: [
            { ID: "100", Name: "Rajat Kulkarni" },
            { ID: "103", Name: "Atelier graphique" },
            { ID: "112", Name: "Signal Gift Stores" },
            { ID: "114", Name: "Australian Collectors, Co." },
            { ID: "119", Name: "La Rochelle Gifts" },
            { ID: "121", Name: "Baane Mini Imports" },
            { ID: "124", Name: "Mini Gifts Distributors Ltd." },
            { ID: "125", Name: "Havel & Zbyszek Co" },
            { ID: "128", Name: "Blauer See Auto, Co." },
            { ID: "129", Name: "Mini Wheels Co." },
            { ID: "131", Name: "Land of Toys Inc." },
            { ID: "141", Name: "Euro+ Shopping Channel" },
            { ID: "144", Name: "Volvo Model Replicas, Co" },
            { ID: "145", Name: "Danish Wholesale Imports" },
            { ID: "146", Name: "Saveley & Henriot, Co." },
            { ID: "148", Name: "Dragon Souveniers, Ltd." },
            { ID: "151", Name: "Muscle Machine Inc" },
            { ID: "157", Name: "Diecast Classics Inc." },
            { ID: "161", Name: "Technics Stores Inc." },
            { ID: "166", Name: "Handji Gifts& Co" },
            { ID: "167", Name: "Herkku Gifts" },
            { ID: "168", Name: "American Souvenirs Inc" },
            { ID: "169", Name: "Porto Imports Co." },
            { ID: "171", Name: "Daedalus Designs Imports" },
            { ID: "172", Name: "La Corne D'abondance, Co." },
            { ID: "173", Name: "Cambridge Collectables Co." },
            { ID: "175", Name: "Gift Depot Inc." },
            { ID: "177", Name: "Osaka Souveniers Co." },
            { ID: "181", Name: "Vitachrome Inc." },
            { ID: "186", Name: "Toys of Finland, Co." },
            { ID: "187", Name: "AV Stores, Co." },
            { ID: "189", Name: "Clover Collections, Co." },
            { ID: "198", Name: "Auto-Moto Classics Inc." },
            { ID: "201", Name: "UK Collectables, Ltd." },
            { ID: "202", Name: "Canadian Gift Exchange Network" },
            { ID: "204", Name: "Online Mini Collectables" },
            { ID: "205", Name: "Toys4GrownUps.com" },
            { ID: "206", Name: "Asian Shopping Network, Co" },
            { ID: "209", Name: "Mini Caravy" },
            { ID: "211", Name: "King Kong Collectables, Co." },
            { ID: "216", Name: "Enaco Distributors" },
            { ID: "219", Name: "Boards & Toys Co." },
            { ID: "223", Name: "Natürlich Autos" },
            { ID: "227", Name: "Heintze Collectables" },
            { ID: "233", Name: "Québec Home Shopping Network" },
            { ID: "237", Name: "ANG Resellers" },
            { ID: "239", Name: "Collectable Mini Designs Co." },
            { ID: "240", Name: "giftsbymail.co.uk" },
            { ID: "242", Name: "Alpha Cognac" },
            { ID: "247", Name: "Messner Shopping Network" },
            { ID: "249", Name: "Amica Models & Co." },
            { ID: "250", Name: "Lyon Souveniers" },
            { ID: "256", Name: "Auto Associés & Cie." },
            { ID: "259", Name: "Toms Spezialitäten, Ltd" },
            { ID: "260", Name: "Royal Canadian Collectables, Ltd." },
            { ID: "273", Name: "Franken Gifts, Co" },
            { ID: "276", Name: "Anna's Decorations, Ltd" },
            { ID: "278", Name: "Rovelli Gifts" },
            { ID: "282", Name: "Souveniers And Things Co." },
            { ID: "286", Name: "Marta's Replicas Co." },
            { ID: "293", Name: "BG&E Collectables" },
            { ID: "298", Name: "Vida Sport, Ltd" },
            { ID: "299", Name: "Norway Gifts By Mail, Co." },
            { ID: "303", Name: "Schuyler Imports" },
            { ID: "307", Name: "Der Hund Imports" },
            { ID: "311", Name: "Oulu Toy Supplies, Inc." },
            { ID: "314", Name: "Petit Auto" },
            { ID: "319", Name: "Mini Classics" },
            { ID: "320", Name: "Mini Creations Ltd." },
            { ID: "321", Name: "Corporate Gift Ideas Co." },
            { ID: "323", Name: "Down Under Souveniers, Inc" },
            { ID: "324", Name: "Stylish Desk Decors, Co." },
            { ID: "328", Name: "Tekni Collectables Inc." },
            { ID: "333", Name: "Australian Gift Network, Co" },
            { ID: "334", Name: "Suominen Souveniers" },
            { ID: "335", Name: "Cramer Spezialitäten, Ltd" },
            { ID: "339", Name: "Classic Gift Ideas, Inc" },
            { ID: "344", Name: "CAF Imports" },
            { ID: "347", Name: "Men 'R' US Retailers, Ltd." },
            { ID: "348", Name: "Asian Treasures, Inc." },
            { ID: "350", Name: "Marseille Mini Autos" },
            { ID: "353", Name: "Reims Collectables" },
            { ID: "356", Name: "SAR Distributors, Co" },
            { ID: "357", Name: "GiftsForHim.com" },
            { ID: "361", Name: "Kommission Auto" },
            { ID: "362", Name: "Gifts4AllAges.com" },
            { ID: "363", Name: "Online Diecast Creations Co." },
            { ID: "369", Name: "Lisboa Souveniers, Inc" },
            { ID: "376", Name: "Precious Collectables" },
            { ID: "379", Name: "Collectables For Less Inc." },
            { ID: "381", Name: "Royale Belge" },
            { ID: "382", Name: "Salzburg Collectables" },
            { ID: "385", Name: "Cruz & Sons Co." },
            { ID: "386", Name: "L'ordine Souveniers" },
            { ID: "398", Name: "Tokyo Collectables, Ltd" },
            { ID: "406", Name: "Auto Canal+ Petit" },
            { ID: "409", Name: "Stuttgart Collectable Exchange" },
            { ID: "412", Name: "Extreme Desk Decorations, Ltd" },
            { ID: "415", Name: "Bavarian Collectables Imports, Co." },
            { ID: "424", Name: "Classic Legends Inc." },
            { ID: "443", Name: "Feuer Online Stores, Inc" },
            { ID: "447", Name: "Gift Ideas Corp." },
            { ID: "448", Name: "Scandinavian Gift Ideas" },
            { ID: "450", Name: "The Sharp Gifts Warehouse" },
            { ID: "452", Name: "Mini Auto Werke" },
            { ID: "455", Name: "Super Scale Inc." },
            { ID: "456", Name: "Microscale Inc." },
            { ID: "458", Name: "Corrida Auto Replicas, Ltd" },
            { ID: "459", Name: "Warburg Exchange" },
            { ID: "462", Name: "FunGiftIdeas.com" },
            { ID: "465", Name: "Anton Designs, Ltd." },
            { ID: "471", Name: "Australian Collectables, Ltd" },
            { ID: "473", Name: "Frau da Collezione" },
            { ID: "475", Name: "West Coast Collectables Co." },
            { ID: "477", Name: "Mit Vergnügen & Co." },
            { ID: "480", Name: "Kremlin Collectables, Co." },
            { ID: "481", Name: "Raanan Stores, Inc" },
            { ID: "484", Name: "Iberia Gift Imports, Corp." },
            { ID: "486", Name: "Motor Mint Distributors Inc." },
            { ID: "487", Name: "Signal Collectibles Ltd." },
            { ID: "489", Name: "Double Decker Gift Stores, Ltd" },
            { ID: "495", Name: "Diecast Collectables" },
            { ID: "496", Name: "Kelly's Gift Shop" },
            { ID: "815823677", Name: "Minal" },
            { ID: "1451651483", Name: "Minal" },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getMultipleRecord",
      },
    },
    {
      serviceName: "getQueryParam",
      description:
        "Get records from the database(customer table) for speficied QUERY parameter and tranform the result in to REST response.",
      output: JSON.stringify(
        {
          Offices: [
            { Country: "USA", City: "San Francisco", "Office Code": "1" },
            { Country: "USA", City: "Boston", "Office Code": "2" },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getQueryParam?state=NY&country=USA",
      },
    },
    {
      serviceName: "getPathParam",
      description:
        "Get records from the database(customer table) for speficied PATH parameter and tranform the result in to REST response.",
      output: JSON.stringify({ ID: 100, Name: "Rajat Kulkarni" }, null, 2),
      endpointInfo: {
        basepath: "getPathParam/100",
      },
    },
    {
      serviceName: "getPathMultiParams",
      description:
        "Get records from the database(customer table) for speficied 3 PATH parameter and tranform the result in to REST response.( all the 3 path params should be present in URI",
      output: JSON.stringify(
        {
          Customers: [
            { ID: 100, Name: "Rajat Kulkarni", City: "Boston", State: "MA" },
            { ID: 362, Name: "Gifts4AllAges.com", City: "Boston", State: "MA" },
            {
              ID: 495,
              Name: "Diecast Collectables",
              City: "Boston",
              State: "MA",
            },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getPathMultiParams/Boston/MA",
      },
    },
    {
      serviceName: "getComplexQuery",
      description:
        "Get records from database table with multiple query paramaters (3), all parameters should be present",
      output: JSON.stringify(
        {
          Customers: [
            {
              ID: "815823677",
              Name: "Minal",
              city: "Pune",
              creditLimit: "1451.25",
            },
            {
              ID: "1451651483",
              Name: "Minal",
              city: "Pune",
              creditLimit: "1451.25",
            },
            {
              ID: "1905654704",
              Name: "Minal",
              city: "Pune",
              creditLimit: "1451.25",
            },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getComplexQuery?name=Minal&city=Pune&creditLimit=1000",
      },
    },
    {
      serviceName: "getQueryParamGlobalError",
      description:
        "Get records from database with specifid Query Parameter. Create a global exception handling component to Send CUSTOM error message if no Data found for given paramater key-value pair. i.e. Custoemr ID (global exception to handle business error scenario)",
      output: JSON.stringify(
        { GlobalError: "Customer does not exist, " },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getQueryParamGlobalError?name=ABC",
      },
    },
    {
      serviceName: "getQueryParamStepError",
      description:
        "Get record from database customer table with specified QUERY Parameter . Add Techncial exception (step exception ) component to handle error when no Custoemr ID was passed and you were expecting the same in Query parameter (step exception to handle technical error scenario, e.g. user did not mention correct id)",
      output: JSON.stringify(
        {
          Customers: [
            { ID: "125", Name: "Havel & Zbyszek Co", City: "Warszawa" },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getQueryParamStepError?name=Havel & Zbyszek Co",
      },
    },
    {
      serviceName: "getPathParamGlobalError",
      description:
        "Get record from database with single Path Parameter. Add Global exception component to handle error message if no Data found for given Path Parameter (same as above but for path params)",
      output: JSON.stringify(
        {
          customerName: "Auto-Moto Classics Inc.",
          customerNumber: 198,
          state: "MA",
          city: "Brickhaven",
          phone: "6175558428",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getPathParamGlobalError/198",
      },
    },
    {
      serviceName: "getPathParamStepError",
      description:
        "Get record from database customer table for multiple Path Parameters  Create a Step exception component to handle techncial exception when one of the two path parameters is not passed (same as above but for path params)",
      output: JSON.stringify({ Offices: [] }, null, 2),
      endpointInfo: {
        basepath: "getPathParamStepError/100221",
      },
    },
    {
      serviceName: "deleteRecord",
      description: "Rest DELETE . Delete data from Customer Table",
      output: JSON.stringify(
        { "Delete Success": "Record is successfully deleted, " },
        null,
        2
      ),
      endpointInfo: {
        cls: "danger",
        method: "DELETE",
        basepath: "deleteRecord?ID=821",
      },
    },
    {
      serviceName: "deleteRecord",
      description:
        "Rest DELETE. Delete from Customer Table . Techncial exception handling when no Custoemr ID was passed and you were expecting the same in Query parameter (URI validator to check if ID is present before deletion)",
      output: JSON.stringify(
        { "Delete Success": "Record is successfully deleted, " },
        null,
        2
      ),
      endpointInfo: {
        cls: "danger",
        method: "DELETE",
        basepath: "deleteRecord?ID=16",
      },
    },
    {
      serviceName: "postSingleRecord",
      description:
        "REST POST. Insert Record in Customer DB . Post body created using request paylaod.",
      input: JSON.stringify(
        {
          ID: 815823677,
          Name: "Minal",
          LastName: "Deshpande",
          FirstName: "Minal",
          phone: "40.32.2555",
          Address1: "Pune",
          Address2: null,
          city: "Pune",
          state: null,
          pincode: "411007",
          country: "India",
          salesRepEmployeeNumber: 1702,
          creditLimit: 1451.25,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          Result: "Customer with following name is inserted in database, ",
          Name: "Minal",
          ID: 815823677,
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postSingleRecord",
      },
    },
    {
      serviceName: "postMultipleRecords",
      description:
        "REST POST . Insert Multipel Records in Custoemr DB Post body created using request paylaod.",
      input: JSON.stringify(
        {
          customers: [
            {
              ID: 1905654704,
              Name: "Minal",
              LastName: "Deshpande",
              FirstName: "Minal",
              phone: "40.32.2555",
              Address1: "Pune",
              Address2: "KP",
              city: "Pune",
              state: "MH",
              pincode: "411007",
              country: "India",
              salesRepEmployeeNumber: 1702,
              creditLimit: 1451.25,
            },
            {
              ID: 1938885300,
              Name: "Manish",
              LastName: "Deshpande",
              FirstName: "Manish",
              phone: "4044442555",
              Address1: "Pune",
              Address2: "Kothrud",
              city: "Pune",
              state: "Maharashtra",
              pincode: "411007",
              country: "India",
              salesRepEmployeeNumber: 1702,
              creditLimit: 1333451.25,
            },
          ],
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          InsertedCustomers: [
            { ID: 815823677, Name: "Minal" },
            { ID: 1451651483, Name: "Minal" },
            { ID: 1905654704, Name: "Minal" },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postMultipleRecords",
      },
    },
    {
      serviceName: "postWrongBody",
      description:
        "REST POST . Exception handlign when body schema is not correct . Post body created using request paylaod.",
      input: JSON.stringify(
        {
          id: 1801902891,
          name: "Lois Griffin",
          "last name": "Griffin",
          "first name": "Lois",
          phone: "40.32.2555",
          "address line 1": "54, rue Royale",
          "address line 2": null,
          city: "Nantes",
          state: null,
          postal: "44000",
          country: "France",
          "employee ref number": 1702,
          "credit limit": 1451.25,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          errorCode: 422,
          status: "Failed",
          errorDescription:
            "Validation Failed. Cause: $.state: null found, string expected $: required property 'customerNumber' not found $: required property 'customerName' not found $: required property 'contactLastName' not found $: required property 'contactFirstName' not found $: required property 'addressLine1' not found $: required property 'addressLine2' not found $: required property 'postalCode' not found $: required property 'salesRepEmployeeNumber' not found $: required property 'creditLimit' not found ",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postWrongBody",
      },
    },
    {
      serviceName: "postDynamicBody",
      description:
        "REST POST Dynamic Scheam created using PayLoad . Read custoemr data for given cust id and create payload .Using payload component generate payload which will be inserted in DB",
      input: JSON.stringify(
        {
          ID: 807680292,
          Name: "Snehal",
          City: "Pune",
          LastName: "Kulkarni",
          FirstName: "Snehal",
          Phone: "4555666777",
          Address1: "Yerwada",
          Address2: "Alandi",
          creditlimit: 1422251.25,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          Result: "Customer entry is inserted in database, ",
          customerList: [
            {
              customerNumber: 807680292,
              customerName: "Snehal",
              contactLastName: "Kulkarni",
              contactFirstName: "Snehal",
              phone: "82345671900",
              addressLine1: "Janapath Apt",
              addressLine2: "Marg",
              city: "Pune",
              state: "Maharashtra",
              postalCode: "411007",
              country: "India",
              salesRepEmployeeNumber: 1088,
              creditLimit: 1422251.25,
            },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postDynamicBody",
      },
    },
    {
      serviceName: "updateRecord",
      description: "REST PUT . Update the Customer Record",
      input: JSON.stringify(
        {
          ID: 412,
          phone: "4040404040",
          city: "Amravati",
          state: null,
          country: "India",
          creditLimit: 200000.25,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          ID: 412,
          Phone: "4040404040",
          City: "Amravati",
          State: "null",
          CreditLimit: "200000.25",
          Country: "India",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "PATCH",
        basepath: "updateRecord",
      },
    },
    {
      serviceName: "getDataOnMultiConditions",
      description:
        "Select records which match multiple conditions ( using other operators than ==), Records are fetched from payments table by providing mendatory query parameter amount and paymentDate. Query uses >= operator with amount and IN operator with paymentDate for fetching the data.",
      output: JSON.stringify(
        {
          responseCode: 200,
          result: [
            {
              customerNumber: 141,
              checkNumber: "ID10962",
              paymentDate: "Dec 31, 2004",
              amount: 116208.4,
            },
            {
              customerNumber: 148,
              checkNumber: "KM172879",
              paymentDate: "Dec 26, 2003",
              amount: 105743.0,
            },
            {
              customerNumber: 495,
              checkNumber: "BH167026",
              paymentDate: "Dec 26, 2003",
              amount: 59265.14,
            },
            {
              customerNumber: 496,
              checkNumber: "MN89921",
              paymentDate: "Dec 31, 2004",
              amount: 52166.0,
            },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        basepath:
          "getDataOnMultiConditions?amount=3000&paymentDate=2004-12-31,2003-12-26",
      },
    },
    {
      serviceName: "getMultiTableRecords",
      description: "DB query having Join of multiple table",
      output: JSON.stringify(
        [
          {
            orderNumber: 10184,
            status: "Shipped",
            customerNumber: 484,
            customerName: "Iberia Gift Imports, Corp.",
          },
          {
            orderNumber: 10303,
            status: "Shipped",
            customerNumber: 484,
            customerName: "Iberia Gift Imports, Corp.",
          },
        ],
        null,
        2
      ),
      endpointInfo: {
        basepath: "geetMultiTableRecords?id=484",
      },
    },
    {
      serviceName: "getCustomQuery",
      description:
        "Complex DB Select Query having SQL functions like sql functions. In this sample a select query is executed which uses concat() and substring_index() funcations to demostrate the usage of custom query which uses sql functions. (query genrator is not used)",
      output: JSON.stringify(
        {
          responseCode: 200,
          result: [
            { modified_email: "dmurphy@atdev.com" },
            { modified_email: "mpatterso@atdev.com" },
            { modified_email: "jfirrelli@atdev.com" },
            { modified_email: "wpatterson@atdev.com" },
            { modified_email: "gbondur@atdev.com" },
            { modified_email: "abow@atdev.com" },
            { modified_email: "ljennings@atdev.com" },
            { modified_email: "lthompson@atdev.com" },
            { modified_email: "jfirrelli@atdev.com" },
            { modified_email: "spatterson@atdev.com" },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getcustomquery",
      },
    },
    {
      serviceName: "postMultipleUpdateInSingleTable",
      description:
        "Update more than one records in single table. In this sample post method is used to update multiple records in a table using the values recieved from the payload. (query generator is used)",
      input: JSON.stringify(
        { creditLimit: 25000.01, fromCredit: 50000.0, toCredit: 60000.0 },
        null,
        2
      ),
      output: JSON.stringify(
        { result: "customers updated sucessfully" },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postMultipleUpdateInSingleTable",
      },
    },
    {
      serviceName: "postMultipleUpdateInMultipleTable",
      description:
        "Update records in multiple DB tables (single transaction). In this sample, 2 update queries are used with different tables. One uses query generator and another uses mix of query generator and custom query. If one fails transaction is rolled back.",
      input: JSON.stringify(
        {
          creditLimit: 35000.0,
          fromCredit: 45000.0,
          toCredit: 50000.0,
          quantityOrdered: 50,
        },
        null,
        2
      ),
      output: JSON.stringify(
        { result: "Records updated successfully" },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postMultipleUpdateInMultipleTable",
      },
    },
    {
      serviceName: "postMultipleDeleteInSingleTable",
      description:
        "delete multiple records in single query. In this sample a simple query is used that will delete multiple records according to a specific input that will be posted as request body (Query generator is used)",
      input: JSON.stringify({ city: "bongaigaon" }, null, 2),
      output: JSON.stringify(
        { result: "Records deleted successfully" },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postMultipleDeleteInSingleTable",
      },
    },
    {
      serviceName: "postMultipleDeleteInMultipleTable",
      description:
        "delete multiple records in multiple queries (i.e. from different tables) single transaction. In this sample two queries are used that will delete multiple records in two different tables, according to specific input that will be posted as request body (Query generator is used)",
      input: JSON.stringify({ city: "bongaigaon", status: "pending" }, null, 2),
      output: JSON.stringify(
        { result: "Records deleted successfully" },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postMultipleDeleteInMultipleTable",
      },
    },
    {
      serviceName: "PostMultiTableInsert",
      description:
        "insert multiple records in multiple queries (i.e. from different tables) single transaction",
      input: JSON.stringify(
        {
          ID: 961308627,
          Name: "Minal",
          LastName: "Deshpande",
          FirstName: "Minal",
          phone: "40.32.2555",
          Address1: "Pune",
          Address2: null,
          city: "Pune",
          state: null,
          pincode: "411007",
          country: "India",
          salesRepEmployeeNumber: 1702,
          creditLimit: 1451.25,
          status: "UPDATED",
          reminder: 1,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          result: [
            {
              customerNumber: 961308627,
              customerName: "Minal",
              contactLastName: "Deshpande",
              contactFirstName: "Minal",
              phone: "40.32.2555",
              addressLine1: "Pune",
              addressLine2: "null",
              city: "Pune",
              state: "null",
              postalCode: "411007",
              country: "India",
              salesRepEmployeeNumber: 1702,
              creditLimit: 1451.25,
              update_id: 1383,
              status_desc: "UPDATED",
              reminder: 1,
            },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "PostMultiTableInsert",
      },
    },
    {
      serviceName: "postReinsert",
      description: "delete and insert in single transaction",
      input: JSON.stringify(
        {
          officeCode: 222,
          city: "pune",
          phone: "1234567",
          addressLine1: "near baner",
          addressLine2: "",
          state: "maha",
          country: "india",
          postalCode: "54545",
          territory: "none",
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          newOffice: {
            officeCode: "222",
            city: "pune",
            phone: "1234567",
            addressLine1: "near baner",
            addressLine2: "",
            state: "maha",
            country: "india",
            postalCode: "54545",
            territory: "none",
          },
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postReinsert",
      },
    },
    {
      serviceName: "postInsertUpdate",
      description:
        "insert and update in single transaction, In this sample two queries were used to insert and update in the same table.(query generator is used)",
      input: JSON.stringify(
        { customerNumber: 133, orderNumber: 1113, status: "pending" },
        null,
        2
      ),
      output: JSON.stringify({ result: "data transaction completed" }, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postInsertUpdate",
      },
    },
    {
      serviceName: "postUpdateDelete",
      description:
        "Create 2 queries, update and delete. Fail the update.(transaction rollback). Delete should not get executed",
      input: JSON.stringify(
        { oldId: "333", newId: "89898", deletionId: 107 },
        null,
        2
      ),
      output: JSON.stringify({ result: "transaction completed" }, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postUpdateDelete",
      },
    },
    {
      serviceName: "bulkUpdate",
      description:
        "Bulk update (Create a Bulk Update query from DB component) and then in response shows the record ids that were updated",
      input: JSON.stringify(
        {
          customers: [
            {
              ID: 108,
              phone: "4040404040",
              city: "Amravati",
              state: "Andhra Pradesh",
            },
            {
              ID: 103,
              phone: "555555555",
              city: "Amravati",
              state: "Telangana",
            },
          ],
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          "Updated Customers": [
            { ID: 103, Name: "Atelier graphique", Phone: "555555555" },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "PATCH",
        basepath: "bulkUpdate",
      },
    },
    {
      serviceName: "bulkInsert",
      description: "BulkInsert of records in a sinfle table.",
      input: JSON.stringify(
        {
          customers: [
            {
              id: 914545147,
              name: "Supriya",
              lastName: "Deshpande",
              firstName: "Supriya",
              phone: "40.32.2555",
              address1: "Pune",
              address2: "Alandi",
              city: "Pune",
              state: "MH",
              pincode: "411007",
              country: "India",
              empID: 1702,
              creditLimit: 1451.25,
            },
            {
              id: 440106432,
              name: "Priya",
              lastName: "Deshpande",
              firstName: "Supriya",
              phone: "4044442555",
              address1: "Pune",
              address2: "pune",
              city: "Pune",
              state: "MH",
              pincode: "411007",
              country: "India",
              empID: 1702,
              creditLimit: 1333451.25,
            },
          ],
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          InsertedCutomers: [
            { ID: "440106432", Name: "Priya" },
            { ID: "914545147", Name: "Supriya" },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "bulkInsert",
      },
    },
    {
      serviceName: "bulkDelete",
      description: "BulkDelete of records within a single table",
      output: JSON.stringify({ result: "records deleted" }, null, 2),
      endpointInfo: {
        cls: "danger",
        method: "DELETE",
        basepath: "bulkDelete?city=Pune",
      },
    },
    {
      serviceName: "deleteMultipleRecords",
      description:
        "Delete multiple records from success_result table to limit the entries",
      input: JSON.stringify({ status: "Dispached" }, null, 2),
      output: JSON.stringify(
        { result: "Records deleted successfully" },
        null,
        2
      ),
      endpointInfo: {
        cls: "danger",
        method: "DELETE",
        basepath: "deleteMultipleRecords",
      },
    },
    {
      serviceName: "queryParamExists",
      description:
        "Exception handling and response in case of  Expected QueryParameter is empty",
      output: JSON.stringify(
        {
          responseCode: 200,
          result: {
            customerNumber: 198,
            customerName: "Auto-Moto Classics Inc.",
            contactLastName: "Taylor",
            contactFirstName: "Leslie",
            phone: "6175558428",
            addressLine1: "16780 Pompton St.",
            addressLine2: null,
            city: "Brickhaven",
            state: "MA",
            postalCode: "58339",
            country: "USA",
            salesRepEmployeeNumber: 1216,
            creditLimit: 23000.0,
          },
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "queryParamExists?id=198",
      },
    },
    {
      serviceName: "getSingleRecordManual",
      description:
        "Get single record from the database(customer table) using manual querry and tranform it to REST response.",
      output: JSON.stringify(
        {
          customerNumber: 100,
          customerName: "Rajat Kulkarni",
          contactLastName: "Kulkarni",
          contactFirstName: "Rajat",
          phone: "+776678887",
          addressLine1: "121 Private Drive",
          addressLine2: "",
          city: "Boston",
          state: "MA",
          postalCode: "51003",
          country: "USA",
          salesRepEmployeeNumber: 1188,
          creditLimit: 78941578.54,
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "getSingleRecordManual/100",
      },
    },
    {
      serviceName: "postSingleRecordManual",
      description:
        "Post single record from the database(customer table) using manual querry and tranform it to REST response.",
      input: JSON.stringify(
        {
          ID: 246279071,
          Name: "Minal",
          LastName: "Deshpande",
          FirstName: "Minal",
          phone: "40.32.2555",
          Address1: "Pune",
          Address2: null,
          city: "Pune",
          state: null,
          pincode: "411007",
          country: "India",
          salesRepEmployeeNumber: 1702,
          creditLimit: 1451.25,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          customerNumber: 246279071,
          customerName: "Minal",
          contactLastName: "Deshpande",
          contactFirstName: "Minal",
          phone: "40.32.2555",
          addressLine1: "Pune",
          addressLine2: null,
          city: "Pune",
          state: null,
          postalCode: "411007",
          country: "India",
          salesRepEmployeeNumber: 1702,
          creditLimit: 1451.25,
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postSingleRecordManual",
      },
    },
    {
      serviceName: "putSingleRecordManual",
      description:
        "Update single record from the database(customer table) using manual querry and tranform it to REST response.",
      input: JSON.stringify(
        {
          ID: 412,
          phone: "4040404040",
          city: "Amravati",
          state: null,
          country: "India",
          creditLimit: 200000.25,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          Result: "Customer Updated Successfully",
          Customer: {
            customerNumber: 412,
            customerName: "Extreme Desk Decorations, Ltd",
            contactLastName: "McRoy",
            contactFirstName: "Sarah",
            phone: "4040404040",
            addressLine1: "101 Lambton Quay",
            addressLine2: "Level 11",
            city: "Amravati",
            state: null,
            postalCode: null,
            country: "India",
            salesRepEmployeeNumber: 1612,
            creditLimit: 200000.25,
          },
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "warning",
        method: "PUT",
        basepath: "putSingleRecordManual",
      },
    },
    {
      serviceName: "deleteSingleRecordManual",
      description:
        "Delete single record from the database(customer table) using manual querry and tranform it to REST response.",
      output: JSON.stringify(
        { Result: "Custome deleted Successfully" },
        null,
        2
      ),
      endpointInfo: {
        cls: "danger",
        method: "DELETE",
        basepath: "deleteSingleRecordManual?ID=1781951504",
      },
    },
    {
      serviceName: "getSingleCount",
      description:
        "Get single record from the database(customer table) and tranform it to REST response should give the count of records as well as actual records",
      output: JSON.stringify({ RowCount: 1 }, null, 2),
      endpointInfo: {
        basepath: "getSingleCount?id=100",
      },
    },
    {
      serviceName: "getMultipleRecordCount",
      description:
        "Get single record from the database(customer table) and tranform it to REST response should give the count of records as well as actual records",
      output: JSON.stringify({ RowCount: 125 }, null, 2),
      endpointInfo: {
        basepath: "getMultipleRecordCount",
      },
    },
    {
      serviceName: "updateBulkCount",
      description:
        "Bulk update (Create a Bulk Update query from DB component) and then in response shows the record ids that were updated. along with message that  captures the exception 0 or 1",
      input: JSON.stringify(
        {
          customers: [
            {
              ID: 108,
              phone: "4040404040",
              city: "Amravati",
              state: "Andhra Pradesh",
            },
            {
              ID: 103,
              phone: "555555555",
              city: "Amravati",
              state: "Telangana",
            },
          ],
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          Status: {
            "Failed Queries": 0,
            "Total Queries": 1,
            "Successfull Queries": 1,
            autoGeneratedKey: 0,
          },
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "PATCH",
        basepath: "updateBulkCount",
      },
    },
    {
      serviceName: "dbExceptionHandling",
      description:
        'This case involves handling of error data if there is any error while executing the db step. In this example, the query provided is incorrect, so the db will throw error of bad sql grammer. This error will be stored in "ERROR" object in the pipeline. Then we have step exception block where we have a step whcih will throw business exception, with message and code.',
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription:
            " - DataAccess Error: ****** DataAccess Error PreparedStatementCallback; bad SQL grammar [select * from customers=24] ******",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "dbExceptionHandling",
      },
    },
    {
      serviceName: "dbWithTimeout",
      description:
        "setting timeout. if connection take longer that set time, gives timeout error.",
      output: JSON.stringify({ ID: 100, Name: "Rajat Kulkarni" }, null, 2),
      endpointInfo: {
        basepath: "dbWithTimeout/100",
      },
    },
    {
      serviceName: "dbWithoutTimeout",
      description:
        "setting timeout. will not give error since not timeout occurs",
      output: JSON.stringify({ ID: 100, Name: "Rajat Kulkarni" }, null, 2),
      endpointInfo: {
        basepath: "dbWithoutTimeout/100",
      },
    },
    {
      serviceName: "putSingleRecordWhenNoFieldPassed",
      description:
        'Put rest with payload. Update query is called. targets for whome values are null or not available from the given key, "NULL" is put in their place. this is for manual query writing, rather than using query creator.',
      input: JSON.stringify(
        { ID: 412, phone: "4040404040", creditLimit: 200000.25 },
        null,
        2
      ),
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription:
            " - DataAccess Error: Error occurred while performing db operation. Cause: StatementCallback; SQL [UPDATE `customers` SET `phone` = '4040404040', `city` = 'Delhi', `state` = NULL, `country` = NULL, `creditLimit` = '200000.25' WHERE (`customerNumber` = '412')]; Column 'country' cannot be null",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "warning",
        method: "PUT",
        basepath: "putSingleRecordWhenNoFieldPassed",
      },
    },
    {
      serviceName: "putSingleRecordSkipNullOnChecked",
      description:
        "Put rest with payload. Update query is called. targets for whome values are null will be skipped from the querry.",
      input: JSON.stringify(
        {
          ID: 412,
          phone: "4040404040",
          city: "Amravati",
          state: "MH",
          country: "India",
          creditLimit: 200000.25,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          Result: "Customer Updated Successfully",
          Customer: {
            customerNumber: 412,
            customerName: "Extreme Desk Decorations, Ltd",
            contactLastName: "McRoy",
            contactFirstName: "Sarah",
            phone: "4040404040",
            addressLine1: "101 Lambton Quay",
            addressLine2: "Level 11",
            city: "Amravati",
            state: "MH",
            postalCode: null,
            country: "India",
            salesRepEmployeeNumber: 1612,
            creditLimit: 200000.25,
          },
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "warning",
        method: "PUT",
        basepath: "putSingleRecordSkipNullOnChecked",
      },
    },
    {
      serviceName: "postSingleRecordSkipNullOnChecked",
      description:
        "Post rest with payload. Insert query is called. targets for whome values are null will be skipped from the querry assuming these are not compulsory in DB table as well.",
      input: JSON.stringify(
        {
          ID: 1451651483,
          Name: "Minal",
          LastName: "Deshpande",
          FirstName: "Minal",
          phone: "40.32.2555",
          Address1: "Pune",
          Address2: null,
          city: "Pune",
          state: null,
          pincode: "411007",
          country: "India",
          salesRepEmployeeNumber: 1702,
          creditLimit: 1451.25,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          customerNumber: 1451651483,
          customerName: "Minal",
          contactLastName: "Deshpande",
          contactFirstName: "Minal",
          phone: "40.32.2555",
          addressLine1: "Pune",
          addressLine2: null,
          city: "Pune",
          state: null,
          postalCode: "411007",
          country: "India",
          salesRepEmployeeNumber: 1702,
          creditLimit: 1451.25,
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postSingleRecordSkipNullOnChecked",
      },
    },
    {
      serviceName: "postDataDefaultDatatype",
      description: "Inserting data in database with the default datatypes.",
      input: JSON.stringify(
        { customerNumber: 10110, orderNumber: 187, status: "Shipped" },
        null,
        2
      ),
      output: JSON.stringify(
        {
          resultId: 315,
          orderNumber: 187,
          status: "Shipped",
          customerNumber: 10110,
          shippedDate: null,
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postDataDefaultDatatype",
      },
    },
  ],
};
