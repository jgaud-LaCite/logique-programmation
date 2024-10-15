import check50

@check50.check()
def test_table_5():
    """Test de la table de multiplication pour le nombre 5."""
    expected_output = "\n".join([f"5 x {i} = {5*i}" for i in range(1, 11)])
    (check50.run("python3 test.py")
        .stdin("5", prompt=True)
        .stdout(expected_output)
        .exit())

@check50.check()
def test_table_7():
    """Test de la table de multiplication pour le nombre 7."""
    expected_output = "\n".join([f"7 x {i} = {7*i}" for i in range(1, 11)])
    (check50.run("python3 test.py")
        .stdin("7", prompt=True)
        .stdout(expected_output)
        .exit())
