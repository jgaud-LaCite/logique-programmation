import check50

@check50.check()
def testhello():
    """Une entrée de HELLO devrait donner une sortie de hello"""
    check50.run("python3 test.py").stdin("HELLO", prompt=False).stdout("hello").exit()

@check50.check()
def testcs50():
    """Une entrée de THIS IS CS50 devrait donner une sortie de this is cs50"""
    check50.run("python3 test.py").stdin("THIS IS CS50", prompt=False).stdout("this is cs50").exit()

@check50.check()
def testnumber():
    """Une entrée de 50 devrait donner une sortie de 50"""
    check50.run("python3 test.py").stdin("50", prompt=False).stdout("50").exit()