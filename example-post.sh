curl --request POST \
  --url http://localhost:7000/panlcdcount \
  --header 'content-type: application/json' \
  --data '{"geometry":"{\"type\":\"Polygon\",\"coordinates\":[[[9.339,0.571],[9.339,0.577],[9.340,0.577],[9.340,0.571],[9.339,0.571]]]}"}'