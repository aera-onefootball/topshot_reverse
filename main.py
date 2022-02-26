# cat lebron.json | jq ".data.searchEditionListings.data.searchSummary.data.data[].id"
import json
import pandas as pd
import requests

with open("data/input/lebron.json", "r") as fh:
    data = json.loads(fh.read())


moments = data["data"]["searchEditionListings"]["data"]["searchSummary"]["data"]["data"]
df = pd.json_normalize(moments)
df.to_csv("data/output/lebron.csv", index=False)
