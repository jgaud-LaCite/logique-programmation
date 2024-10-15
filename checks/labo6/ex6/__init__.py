import check50

@check50.check()
def test_N_5():
    """Test avec N = 5."""
    expected_output = "\n".join(['*' * i for i in range(1, 6)])
    (check50.run("python3 test.py")
        .stdin("5", prompt=True)
        .stdout(expected_output, regex=False)
        .exit())

@check50.check()
def test_N_3():
    """Test avec N = 3."""
    expected_output = "\n".join(['*' * i for i in range(1, 4)])
    (check50.run("python3 test.py")
        .stdin("3", prompt=True)
        .stdout(expected_output, regex=False)
        .exit())
