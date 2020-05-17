import requests
import time
import random

url = "https://fast-waters-99834.herokuapp.com/api/datapoint"

while True:
    random.seed()
    data = {
    	"amps": random.randint(3, 13),
    	"volts": random.randint(10, 25)
    }
    print('posting')
    requests.post(url, data)
    time.sleep(5)
