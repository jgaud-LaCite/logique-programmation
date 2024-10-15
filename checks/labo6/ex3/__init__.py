import check50

@check50.check()
def test_tables_1_to_9():
    """Test de l'affichage des tables de multiplication de 1 à 9."""
    expected_output = ""
    for nombre in range(1, 10):
        expected_output += f"Table de multiplication de {nombre} :\n"
        for i in range(1, 11):
            expected_output += f"{nombre} x {i} = {nombre * i}\n"
        expected_output += "\n"
    (check50.run("python3 test.py")
        .stdout(expected_output.strip())
        .exit())
