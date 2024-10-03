import check50

@check50.check()
def test1():
    """Une entrée de 12 et 4 donne 12.6"""
    check50.run("python3 test.py").stdin("12", prompt=True).stdin("4", prompt=True).stdout('12.6', 'L\'hypoténuse est de 12.6\n').exit()

@check50.check()
def test2():
    """Une entrée de 15.6 et 19.8 donne 25.20"""
    check50.run("python3 test.py").stdin("15.6", prompt=True).stdin("19.8", prompt=True).stdout('25.20', 'L\'hypoténuse est de 12.6\n').exit()