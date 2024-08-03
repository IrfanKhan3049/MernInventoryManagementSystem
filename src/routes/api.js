const express = require('express');
const AuthVerifyMiddleware=require("../middlewares/AuthVerifiyMiddleware");
const UserController=require("../controllers/Users/UserController");
const BrandsContrller=require("../controllers/Brands/BrandsController")
const CategoriesController = require("../controllers/Categories/CategoriesController");
const CustomersController = require("../controllers/Customers/CustomersController");
const SuppliersController = require("../controllers/Suppliers/SuppliersController");
const ExpenseTypesController = require("../controllers/Expenses/ExpenseTypesController");
const ExpensesController = require("../controllers/Expenses/ExpensesController");
const ProductsController = require("../controllers/Products/ProductsController");
const PurchasesController = require("../controllers/Purchases/PurchasesController");
const SalesController = require("../controllers/Sales/SalesController");
const ReturnsController = require("../controllers/Returns/ReturnsController");
const ReportController = require("../controllers/Report/ReportController");
const SummaryController = require("../controllers/Summary/SummaryController");

const router = express.Router();

//User Profile
router.post("/Registration",UserController.Registration);
router.post("/Login",UserController.Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,UserController.ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,UserController.ProfileDetails);
router.get("/RecoverVerifyEmail/:email",AuthVerifyMiddleware,UserController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",AuthVerifyMiddleware,UserController.RecoverVerifyOTP);
router.post("/RecoverResetPass",AuthVerifyMiddleware,UserController.RecoverResetPass);

//Brands
router.post("/CreateBrand",AuthVerifyMiddleware,BrandsContrller.CreateBrand);
router.post("/UpdateBrand/:id",AuthVerifyMiddleware,BrandsContrller.UpdateBrand);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandsContrller.BrandList);
router.get("/BrandDropdown",AuthVerifyMiddleware,BrandsContrller.BrandDropdown);
router.get("/DeleteBrand/:id",AuthVerifyMiddleware,BrandsContrller.DeleteBrand);
router.get("/BrandDetailsByID/:id",AuthVerifyMiddleware,BrandsContrller.BrandDetailsByID);

// Categories
router.post("/CreateCategories",AuthVerifyMiddleware,CategoriesController.CreateCategories);
router.post("/UpdateCategories/:id",AuthVerifyMiddleware,CategoriesController.UpdateCategories);
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CategoriesController.CategoriesList);
router.get("/CategoriesDropDown",AuthVerifyMiddleware,CategoriesController.CategoriesDropDown);
router.get("/DeleteCategories/:id",AuthVerifyMiddleware,CategoriesController.DeleteCategories);
router.get("/CategoriesDetailsByID/:id",AuthVerifyMiddleware,CategoriesController.CategoriesDetailsByID);


// Customers
router.post("/CreateCustomers",AuthVerifyMiddleware,CustomersController.CreateCustomers);
router.post("/UpdateCustomers/:id",AuthVerifyMiddleware,CustomersController.UpdateCustomers);
router.get("/CustomersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CustomersController.CustomersList);
router.get("/CustomersDropDown",AuthVerifyMiddleware,CustomersController.CustomersDropDown);
router.get("/DeleteCustomer/:id",AuthVerifyMiddleware,CustomersController.DeleteCustomer);
router.get("/CustomersDetailsByID/:id",AuthVerifyMiddleware,CustomersController.CustomersDetailsByID);

// Suppliers
router.post("/CreateSuppliers",AuthVerifyMiddleware,SuppliersController.CreateSuppliers);
router.post("/UpdateSuppliers/:id",AuthVerifyMiddleware,SuppliersController.UpdateSuppliers);
router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SuppliersController.SuppliersList);
router.get("/SuppliersDropDown",AuthVerifyMiddleware,SuppliersController.SuppliersDropDown);
router.get("/DeleteSupplier/:id",AuthVerifyMiddleware,SuppliersController.DeleteSupplier);
router.get("/SuppliersDetailsByID/:id",AuthVerifyMiddleware,SuppliersController.SuppliersDetailsByID);

// ExpenseTypes 
router.post("/CreateExpenseTypes",AuthVerifyMiddleware,ExpenseTypesController.CreateExpenseTypes);
router.post("/UpdateExpenseType/:id",AuthVerifyMiddleware,ExpenseTypesController.UpdateExpenseTypes);
router.get("/ExpenseTypesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExpenseTypesController.ExpenseTypesList);
router.get("/ExpenseTypesDropDown",AuthVerifyMiddleware,ExpenseTypesController.ExpenseTypesDropDown);
router.get("/DeleteExpenseTypes/:id",AuthVerifyMiddleware,ExpenseTypesController.DeleteExpenseTypes);
router.get("/ExpenseTypesDetailsByID/:id",AuthVerifyMiddleware,ExpenseTypesController.ExpenseTypesDetailsByID);

//Expense
router.post("/CreateExpenses",AuthVerifyMiddleware,ExpensesController.CreateExpense);
router.post("/UpdateExpenses/:id",AuthVerifyMiddleware,ExpensesController.UpdateExpense);
router.get("/ExpensesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExpensesController.ExpensesList);
router.get("/DeleteExpense/:id",AuthVerifyMiddleware,ExpensesController.DeleteExpense);
router.get("/ExpenseDetailsByID/:id",AuthVerifyMiddleware,ExpensesController.ExpenseDetailsByID);

//Products
router.post("/CreateProducts",AuthVerifyMiddleware,ProductsController.CreateProducts);
router.post("/UpdateProducts/:id",AuthVerifyMiddleware,ProductsController.UpdateProducts);
router.get("/ProductList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ProductsController.ProductsList);
router.get("/DeleteProduct/:id",AuthVerifyMiddleware,ProductsController.DeleteProduct);
router.get("/ProductsDetailsByID/:id",AuthVerifyMiddleware,ProductsController.ProductsDetailsByID);

//Purchases
router.post("/CreatePurchases",AuthVerifyMiddleware,PurchasesController.CreatePurchases);
router.get("/PurchasesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,PurchasesController.PurchasesList);
router.get("/PurchasesDelete/:id",AuthVerifyMiddleware,PurchasesController.PurchasesDelete);

//Sales
router.post("/CreateSales",AuthVerifyMiddleware,SalesController.CreateSales);
router.get("/SalesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SalesController.SaleList);
router.get("/SaleDelete/:id",AuthVerifyMiddleware,SalesController.SaleDelete);

//Return
router.post("/CreateReturns",AuthVerifyMiddleware,ReturnsController.CreateReturns);
router.get("/ReturnsList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ReturnsController.ReturnsList);
router.get("/ReturnDelete/:id",AuthVerifyMiddleware,ReturnsController.ReturnDelete);

//Report
router.post("/ExpensesByDate",AuthVerifyMiddleware,ReportController.ExpensesByDate);
router.post("/ReturnByDate",AuthVerifyMiddleware,ReportController.ReturnByDate);
router.post("/PurchaseByDate",AuthVerifyMiddleware,ReportController.PurchaseByDate);
router.post("/SalesByDate",AuthVerifyMiddleware,ReportController.SalesByDate);

//Summary
router.post("/ExpensesSummary",AuthVerifyMiddleware,SummaryController.ExpensesSummary);
router.post("/ReturnSummary",AuthVerifyMiddleware,SummaryController.ReturnSummary);
router.post("/PurchaseSummary",AuthVerifyMiddleware,SummaryController.PurchaseSummary);
router.post("/SalesSummary",AuthVerifyMiddleware,SummaryController.SalesSummary);

module.exports=router;