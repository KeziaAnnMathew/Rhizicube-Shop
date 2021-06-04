Approach
	Front-End(Angular 11.0.4)
	1)Product-Listing Page
		Fetched product details from database via backend server. An interface/model for a product was created and an 
		array of this interface is declared is created to store details from backend. This array of data is displayed in the UI.

	2)Cart Page
		The products which are added from product list to the cart are added into a cart array initialised in the service. 
		The total sum is added from the price of individual product and is also displayed.A product can be even removed from the current cart.
	
	3)Add-Product Page
		A simple form with all the attributes of the product and also with proper validations is implemented.
		The added product is sent to the databse via the server and is also update in the product list page.

	Back-End
	A simple node js server with APIs for adding a product to the database(MongoDB Atlas) and fetching all products from the database.

Tools and Technologies: Angular, Node.js, Express, Bootstrap

Steps to run Code

	1)Extract the .zip file
	**Commands to run Backend
	2)cd Rhizicube\Api
	3)npm install
	4)node app.js or nodemon app.js
	**Commands to run Frontend
	5)cd Rhizicube\ProductApp
	6)npm install
	7)ng serve

	