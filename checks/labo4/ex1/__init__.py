import check50

@check50.check()
def test50():
    """Une entrée de $50.00 et 15% donne $7.50"""
    check50.run("python3 test.py").stdin("50.00", prompt=True).stdin("15%", prompt=True).stdout('7.50', 'Laisser 7.50$\n').exit()

@check50.check()
def test100():
    """Une entrée de $100.00 et 18% donne $18.00"""
    check50.run("python3 test.py").stdin("100.00", prompt=True).stdin("18%", prompt=True).stdout('18.00', 'Laisser 18.00$\n').exit()

@check50.check()
def test15():
    """Une entrée de $15.00 et 25% donne $3.75"""
    check50.run("python3 test.py").stdin("15.00", prompt=True).stdin("25%", prompt=True).stdout('3.75', 'Laisser 3.75$\n').exit()