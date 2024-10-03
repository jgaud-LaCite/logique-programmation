import check50

@check50.check()
def test1():
    check50.run("python3 test.py").stdin("2", prompt=True).stdin("4", prompt=True).stdin(".", prompt=True).stdout('invalide', 'Opérateur invalide\n').exit()

@check50.check()
def test2():
    check50.run("python3 test.py").stdin("4", prompt=True).stdin("5", prompt=True).stdin("-", prompt=True).stdout('-1', 'Le résultat est: -1.0\n').exit()

@check50.check()
def test3():
    check50.run("python3 test.py").stdin("67", prompt=True).stdin("12", prompt=True).stdin("+", prompt=True).stdout('79', 'Le résultat est: 79.0\n').exit()