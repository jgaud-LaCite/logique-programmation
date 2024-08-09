import check50

@check50.check()
def test447():
    """Une entrée de 447.58 devrait donner une sortie de 505.7654"""
    check50.run("python3 test.py").stdin("447.58", prompt=True).stdout(r'505\.7654', "Le prix TTC est : 505.7654\n").exit(0)