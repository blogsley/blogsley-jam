# blogsley-jam/client :guitar:

[![Netlify Status](https://api.netlify.com/api/v1/badges/401c7040-c4ce-4c9a-baeb-c0f2f82ea4a4/deploy-status)](https://app.netlify.com/sites/blogsley-jam/deploys)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Installation

1. Navigate to a directory where you keep your software projects:

        cd projects

2. Clone the repository:

        git clone https://github.com/blogsley/blogsley-flask.git
        
3. Navigate to the new directory which contains the repository.

        cd blogsley-flask

4. Create a Python 3 virtual environment called `env`:

        python3 -m venv env

* Note: you may also need to do this first:

        sudo apt-get install python3-venv

5. Activate the environment:

        source env/bin/activate
        
6. Install required packages:

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
