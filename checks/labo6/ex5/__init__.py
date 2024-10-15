import check50

@check50.check()
def test_nb_9569():
    """Test avec le nombre 9569."""
    (check50.run("python3 test.py")
        .stdin("9569", prompt=True)
        .stdout("2", "Le chiffre de chance est : 2")
        .exit())

@check50.check()
def test_nb_1234():
    """Test avec le nombre 1234."""
    (check50.run("python3 test.py")
        .stdin("1234", prompt=True)
        .stdout("1", "Le chiffre de chance est : 1")
        .exit())
