# blogsley-jam :guitar:

This is a boilerplate example of a `blogsley project`

## Heroku Configuration

Set the Flask environment variable

        heroku config:set FLASK_APP=blogsley_flask:create_app

Set the publish hook

        heroku config:set PUBLISH_HOOK=https://api.netlify.com/build_hooks/{ your key here }
