from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

# Configuración de la base de datos
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'ecomerce'
}

@app.route('/productos', methods=['GET'])
def obtener_productos():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor(dictionary=True)
    
    cursor.execute("SELECT * FROM productos")
    productos = cursor.fetchall()
    
    cursor.close()
    conn.close()
    
    return jsonify(productos)

if __name__ == '__main__':
    app.run(debug=True)
