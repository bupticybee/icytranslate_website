# icytranslate_website
This is the code of the web interface of [Icytranslate](translate.icybee.cn) ,  a translate platform. This project is written entirely on django , a python framework. Database is not required for this application.

You can deploy this project through standard django application deployment process (nginx + uwsgi suggested) Or 


```
python manage.py runserver
```

if you meant to test the project.

However, this project only includes the website of icytranslate, icytranslate_api should also be deployed to make the website fully functional.
