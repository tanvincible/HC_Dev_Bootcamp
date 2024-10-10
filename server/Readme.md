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

# DataBase and work flow

1. For each Appointment we will have 5 current Status point, showing next step for the process

   all other than student have the power of changing the status.

- 'R' - Receptionist for alloting the doctor with time
- 'D' - Doctor for treating the patient
- 'T' - Test center for doing the test and uploading the reports
- 'P' - Pharamacy
- 'C' - when the appointement is over

2. There are 5 roles too, point to note, there id will start form this letter for now confussion.

- 'S' : Student
- 'D' : Doctor
- 'R' : Receptionist
- 'T' : Test Center
- 'P' : Pharamacy

3. We are using different modles for the FAST API handeling
