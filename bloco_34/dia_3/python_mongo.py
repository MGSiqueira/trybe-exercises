from pymongo import MongoClient


with MongoClient() as client:
    db = client.catalogue

# inserção de documentos
# documents = [
#   {
#   "title": "A light in the Attic",
#   },
#   {
#     "title": "Tipping the Velvet",
#   },
#   {
#     "title": "Soumission",
#   },
# ]
# db.books.insert_many(documents)

# consulta de documentos
    print(db.books.find_one())

    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
