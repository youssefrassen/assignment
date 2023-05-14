FROM python:3.6-slim-buster

WORKDIR /app

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .
COPY templates/style.css /app/static/

EXPOSE 4000

CMD [ "flask", "run", "--host=0.0.0.0", "--port=4000"]