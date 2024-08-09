import check50

@check50.check()
def test34():
    """Un montant de 34.56 et tip de 15% devrait donner un pourboire de 5.184..."""
    check50.run("python3 test.py").stdin("34.56", prompt=True).stdin("15", prompt=True) \
    .stdout("5.18", "Le montant du pourboire est : 5.18\n").exit(0)

@check50.check()
def test501():
    """Un montant de 501.23 et tip de 20% devrait donner un pourboire de 100.246..."""
    check50.run("python3 test.py").stdin("501.23", prompt=True).stdin("20", prompt=True) \
    .stdout("100.24", "Le montant du pourboire est : 100.24\n").exit(0)