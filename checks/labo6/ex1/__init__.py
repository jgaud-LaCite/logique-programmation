import check50

@check50.check()
def test_valid_input():
    """Test avec une entrée valide."""
    check50.run("python3 test.py")\
        .stdin("15", prompt=True)\
        .stdout("15", "Nombre choisi: 15")\
        .exit()

@check50.check()
def test_invalid_then_valid():
    """Test avec une entrée invalide suivie d'une entrée valide."""
    (check50.run("python3 test.py")
        .stdin("25", prompt=True)
        .stdout("Entrez un nombre", "Entrez un nombre entre 1 et 20")
        .stdin("10", prompt=True)
        .stdout("10", "Nombre choisi: 10")
        .exit())

@check50.check()
def test_multiple_invalid():
    """Test avec plusieurs entrées invalides avant une entrée valide."""
    (check50.run("python3 test.py")
        .stdin("0", prompt=True)
        .stdout("Entrez un nombre", "Entrez un nombre entre 1 et 20")
        .stdin("-5", prompt=True)
        .stdout("Entrez un nombre", "Entrez un nombre entre 1 et 20")
        .stdin("abc", prompt=True)
        .stdout("Entrez un nombre", "Entrez un nombre entre 1 et 20")
        .stdin("20", prompt=True)
        .stdout("20", "Nombre choisi: 20")
        .exit())
