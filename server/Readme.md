# Python virtual env

Creating a virtual env

```
python -m venv <name>
```

Activate the env

```
source <name>/bin/activate
```

And deactivate

```
deactivate
```

list of packages installed in our virtual environment by running

```
pip list
```

After installing your required libraries, you can view all installed libraries by using pip list, or you can generate a text file listing all your project dependencies

```
pip freeze > requirements.txt
```

```
pip install -r requirements.txt
```

# Fast Api

student will only have acces to his profile details, other roles will have access to all.
