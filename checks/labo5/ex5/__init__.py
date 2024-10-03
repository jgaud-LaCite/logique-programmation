import check50

@check50.check()
def test1():
    check50.run("python3 test.py").stdin("13:55", prompt=True).stdout('diner', 'Il est le temps de prendre le diner.\n').exit()

@check50.check()
def test2():
    check50.run("python3 test.py").stdin("14:23", prompt=True).stdout('pas', "Ce n'est pas l'heure d'un repas\n").exit()

@check50.check()
def test3():
    check50.run("python3 test.py").stdin("18:00", prompt=True).stdout('souper', 'Il est le temps de prendre le souper.\n').exit()

@check50.check()
def test4():
    check50.run("python3 test.py").stdin("09:00", prompt=True).stdout('pas', "Ce n'est pas l'heure d'un repas\n").exit()