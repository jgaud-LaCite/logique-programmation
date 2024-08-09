import check50

@check50.check()
def test447():
    """Une entrée de 447.58 devrait donner une sortie de 505.765..."""
    check50.run("python3 test.py").stdin("447.58", prompt=True).stdout(r'505\.765', "Le prix TTC est : 505.765\n").exit(0)

@check50.check()
def test17():
    """Une entrée de 17.89 devrait donner une sortie de 20.215..."""
    check50.run("python3 test.py").stdin("17.89", prompt=True).stdout(r'20\.215', "Le prix TTC est : 20.215\n").exit(0)

@check50.check()
def test17():
    """Une entrée de 40.88 devrait donner une sortie de 46.194..."""
    check50.run("python3 test.py").stdin("40.88", prompt=True).stdout(r'46\.194', "Le prix TTC est : 46.194\n").exit(0)