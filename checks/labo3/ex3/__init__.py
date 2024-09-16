import check50

@check50.check()
def test8246():
    """Une entrée de 8,2,4 et 6 devrait donner une sortie de 5.65..."""
    check50.run("python3 test.py").stdin("8", prompt=True) \
    .stdin("2", prompt=True) \
    .stdin("4", prompt=True) \
    .stdin("6", prompt=True) \
    .stdout("5.65", "La distance entre les points A et B est : 5.65\n").exit(0)

@check50.check()
def test9145():
    """Une entrée de 9,1,4 et 5 devrait donner une sortie de 6.40..."""
    check50.run("python3 test.py").stdin("9", prompt=True) \
    .stdin("1", prompt=True) \
    .stdin("4", prompt=True) \
    .stdin("5", prompt=True) \
    .stdout("6.40", "La distance entre les points A et B est : 6.40\n").exit(0)