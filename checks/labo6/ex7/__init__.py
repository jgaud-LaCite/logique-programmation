import check50

@check50.check()
def test_sum():
    """Test de la somme des nombres de 1 à 999 en ignorant les multiples de 10."""
    expected_sum = sum(i for i in range(1, 1000) if i % 10 != 0)
    (check50.run("python3 test.py")
        .stdout(f"{expected_sum}", f"La somme des nombres de 1 à 999, en ignorant les multiples de 10, est : {expected_sum}")
        .exit())
