from flask import Flask, redirect, request, jsonify, url_for
from flask_cors import CORS #import Cors

app = Flask(__name__)
CORS(app) #enable Cors

users = []
products = [ 
    { 
        "id": 1, 
        "name": "Product 1", 
        "description": "Description for Product 1", 
        "price": 10.99, 
        "image": 'images/product1.png' 
    }, 
    { 
        "id": 2, 
        "name": "Product 2", 
        "description": "Description for Product 2", 
        "price": 20.99, 
        "image": 'images/product2.jpg' 
    }, 
    { 
        "id": 3, 
        "name": "Product 3", 
        "description": "Description for Product 3", 
        "price": 10.99, 
        "image": 'images/product3.jpg' 
    }, 
    { 
        "id": 4, 
        "name": "Product 4", 
        "description": "Description for Product 4", 
        "price": 10.99,
        "image": 'images/product4.jpg' 
    }, 
    { 
        "id": 5, 
        "name": "Product 5", 
        "description": "Description for Product 5", 
        "price": 10.99, 
        "image": 'images/product5.jpg' 
    }, 
    { 
        "id": 6, 
        "name": "Product 6", 
        "description": "Description for Product 6", 
        "price": 10.99, 
        "image": 'images/product6.jpg' 
    }, 
    { 
        "id": 7, 
        "name": "Product 7", 
        "description": "Description for Product 7", 
        "price": 10.99, 
        "image": 'images/product7.jpg' 
    }, 
    { 
        "id": 8, 
        "name": "Product 8", 
        "description": "Description for Product 8", 
        "price": 10.99, 
        "image": 'images/product8.jpg' 
    }, 
    { 
        "id": 9, 
        "name": "Product 9", 
        "description": "Description for Product 9", 
        "price": 10.99, 
        "image": 'images/product9.jpg' 
    }, 
    { 
        "id": 10, 
        "name": "Product 10", 
        "description": "Description for Product 10", 
        "price": 10.99, 
        "image": 'images/product10.jpg' 
    } 
]

@app.route('/register', methods=['POST'])
def register():
    # Get the request data
    data = request.get_json()

    # Create a new user as a dictionary
    new_user = {
        "username": data.get("username"),
        "password": data.get("password"),
        "email": data.get("email")
    }

    # Check if the username already exists in the users list
    for user in users:
        if new_user["username"] == user["username"]:
            return jsonify({"message": "Username already exists"}), 400

    # If the username doesn't exist, add the new user to the users list
    users.append(new_user)
    return jsonify({"message": "User created successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    # Get the request data
    data = request.get_json()

    # Check if the username and password exist in the users list
    for user in users:
        if data.get("username") == user["username"] and data.get("password") == user["password"]:
            return redirect(url_for('product'))

    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/product', methods=['GET'])
def product():
    return ' '

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)