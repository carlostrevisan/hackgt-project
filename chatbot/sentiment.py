#pip install Flask
from flask import Flask
from flask import request
#pip install -U textblob
#python -m textblob.download_corpora lite
from textblob import TextBlob

app = Flask(__name__)

@app.route('/get_sentiment', methods=['POST'])
def get_sentiment():
    text = request.args.get('text')
    blob = TextBlob(text)
    sentiment = blob.sentiment.polarity
    return sentiment

if __name__ == '__main__':
    app.run(debug=True)
