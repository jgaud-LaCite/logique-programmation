import check50

@check50.check()
def test1426():
    """Permutation de 14 et 26"""
    check50.run("python3 test.py").stdin("14", prompt=True).stdin("26", prompt=True) \
    .stdout(r'14', "Première variable avant permutation : a = 14\n") \
    .stdout(r'26', "Deuxième variable avant permutation : b = 26\n") \
    .stdout(r'26', "Première variable après permutation : a = 26\n") \
    .stdout(r'14', "Deuxième variable après permutation : b = 14\n").exit(0)

def test5620():
    """Permutation de 56.2 et 20.4"""
    check50.run("python3 test.py").stdin("56.2", prompt=True).stdin("20.4", prompt=True) \
    .stdout(r'56.2', "Première variable avant permutation : a = 56.2\n") \
    .stdout(r'20.4', "Deuxième variable avant permutation : b = 20.4\n") \
    .stdout(r'20.4', "Première variable après permutation : a = 20.4\n") \
    .stdout(r'56.2', "Deuxième variable après permutation : b = 56.2\n").exit(0)