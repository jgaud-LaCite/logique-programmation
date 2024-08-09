import check50

@check50.check()
def test34():
    """Une entrée de 34.58 devrait donner une sortie de 25.6148..."""
    check50.run("python3 test.py").stdin("34.58", prompt=True) \
    .stdout("25.61", "Le prix en dollars US est : 25.61\n").exit(0)

@check50.check()
def test501():
    """Une entrée de 501.23 devrait donner une sortie de 371.28..."""
    check50.run("python3 test.py").stdin("501.23", prompt=True) \
    .stdout("371.28", "Le prix en dollars US est : 371.28\n").exit(0)