import check50

@check50.check()
def test_mon_fichier_python():
    """Entrée de mon_fichier_python"""
    check50.run("python3 test.py").stdin("8", prompt=True) \
    .stdin("mon_fichier_python", prompt=True) \
    .stdout("mon_fichier_python.py", "Le nom du fichier avec l'extension .py est : mon_fichier_python.py") \
    .stdout("thon", "Les quatre derniers caractères du nom du fichier sont : thon") \
    .stdout("mon", "Les trois premiers caractères du nom du fichier sont : mon").exit(0)


def test_():
    """Entrée de exo1"""
    check50.run("python3 test.py").stdin("8", prompt=True) \
    .stdin("exo1", prompt=True) \
    .stdout("exo1.py", "Le nom du fichier avec l'extension .py est : exo1.py") \
    .stdout("exo1", "Les quatre derniers caractères du nom du fichier sont : exo1") \
    .stdout("exo", "Les trois premiers caractères du nom du fichier sont : exo").exit(0)