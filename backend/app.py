from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import requests

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://yogesh_sharma:yogesh123@localhost:27017/my_database")

collection = client["my_database"]["movies"]

def path(movie_name):
    data_from_db = collection.find({"title":movie_name},{"_id":0,"recommendation":1, "movie_id":1 })
    recommendations = list(data_from_db)[0]['recommendation']
    
    movie_info = {}
    for movie_id, movie_name  in recommendations.items():
        movie_info[movie_id] = image_path(movie_id)['path']
    
    return movie_info

def recommender(movie_name):
    data_from_db = collection.find({"title":movie_name},{"_id":0,"recommendation":1, "movie_id":1 })
    data_from_db = collection.find({"title":movie_name},{"_id":0,"recommendation":1, "movie_id":1 })
    recommendations = list(data_from_db)[0]
    recommendations["path"] = path(movie_name)
    return recommendations


def image_path(movie_id):
    url = f"https://api.themoviedb.org/3/movie/{movie_id}?api_key=1abd75cdf4c01bc8f528b9de870ac0c2"
    data = requests.get(url).json()
    
    # Check if 'poster_path' key exists and if it's not None or empty
    if 'poster_path' in data and data['poster_path']:
        poster_path = data['poster_path']
        full_path = f"https://image.tmdb.org/t/p/w500/{poster_path}"
        return {"path":full_path}
    else:
        return {"path":"https://via.placeholder.com/500x750.png?text=No+Poster"} # Return a placeholder image URL or handle as desired
    

@app.route("/")
def get_data():
    data_from_db = list(collection.find({},{"_id":0,"movie_id":1, "title":1}))
    return jsonify(data_from_db)

@app.route("/recommend_movies/<movies>")
def recommend_page(movies):
    return recommender(movies)

if __name__=="__main__":
    app.run(debug=True)
