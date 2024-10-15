import check50

@check50.check()
def test_tables_3_to_5():
    """Test de l'affichage des tables de multiplication de 3 à 5."""
    expected_output = ""
    for nombre in range(3, 6):
        expected_output += f"Table de multiplication de {nombre} :\n"
        for i in range(1, 11):
            expected_output += f"{nombre} x {i} = {nombre * i}\n"
        expected_output += "\n"
    (check50.run("python3 test.py")
        .stdin("3", prompt=True)
        .stdin("5", prompt=True)
        .stdout(expected_output.strip())
        .exit())

@check50.check()
def test_tables_1_to_2():
    """Test de l'affichage des tables de multiplication de 1 à 2."""
    expected_output = ""
    for nombre in range(1, 3):
        expected_output += f"Table de multiplication de {nombre} :\n"
        for i in range(1, 11):
            expected_output += f"{nombre} x {i} = {nombre * i}\n"
        expected_output += "\n"
    (check50.run("python3 test.py")
        .stdin("1", prompt=True)
        .stdin("2", prompt=True)
        .stdout(expected_output.strip())
        .exit())
