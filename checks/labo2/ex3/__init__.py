import check50

@check50.check()
def test27():
    """Une entrée de 27.8 devrait donner une surface de 2427.95... et un périmètre de 174.67..."""
    check50.run("python3 test.py").stdin("27.8", prompt=True) \
    .stdout("2427.95", "La surface du cercle est : 2427.95\n") \
    .stdout("174.67", "Le périmètre du cercle est : 174.67\n").exit(0)

def test48():
    """Une entrée de 48.3 devrait donner une surface de 7329.00... et un périmètre de 303.4785..."""
    check50.run("python3 test.py").stdin("48.3", prompt=True) \
    .stdout("7329.00", "La surface du cercle est : 7329.00\n") \
    .stdout("303.47", "Le périmètre du cercle est : 303.47\n").exit(0)