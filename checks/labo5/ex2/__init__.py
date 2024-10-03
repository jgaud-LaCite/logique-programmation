import check50

@check50.check()
def test1():
    check50.run("python3 test.py").stdin("52", prompt=True).stdout('valide partiel', 'Le nombre est valide partiel\n').exit()

@check50.check()
def test2():
    check50.run("python3 test.py").stdin("48", prompt=True).stdout('valide total', 'Le nombre est valide total\n').exit()

@check50.check()
def test3():
    check50.run("python3 test.py").stdin("27", prompt=True).stdout('invalide', 'Le nombre est invalide partiel et invalide total\n').exit()