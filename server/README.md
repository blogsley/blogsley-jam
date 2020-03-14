# blogsley-jam/server :guitar:

## Installation

Navigate to a directory where you keep your software projects:

        cd server


Create a Python 3 virtual environment called `env`:

        python3 -m venv env

* Note: you may also need to do this first:

        sudo apt-get install python3-venv

Activate the environment:

        source env/bin/activate
        
Install required packages:

        pip install -r requirements.txt

* Note: you may also need to do this first if you want the wheels to build:

        pip3 install wheel

## PostgreSql (optional)
        sudo -u postgres -i
        psql
        postgres=# createdb blogsleyflask;
        postgres-# createuser blogsleyflask;
        postgres-# alter user blogsleyflask with encrypted password 'blogsleyflask';
        postgres-# grant all privileges on database blogsleyflask to blogsleyflask;

## Development

1. Activate the virtual environment, if not already active:

        cd blogsley-flask
        source env/bin/activate
        
2. Launch the Flask application in debug mode:

        ./dev

### Yarn

        yarn
or        

        yarn upgrade-interactive --latest

## Deployment

        heroku git:remote -a blogsley-jam

        git subtree push --prefix server heroku master