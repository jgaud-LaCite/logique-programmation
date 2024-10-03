import check50

@check50.check()
def test1():
    check50.run("python3 test.py").stdin("31", prompt=True).stdin("12", prompt=True).stdin("2024", prompt=True).stdout('1/1/2025', 'Le jour suivant est: 1/1/2025\n').exit()

@check50.check()
def test2():
    check50.run("python3 test.py").stdin("28", prompt=True).stdin("2", prompt=True).stdin("2021", prompt=True).stdout('1/3/2021', 'Le jour suivant est: 1/3/2021\n').exit()

@check50.check()
def test3():
    check50.run("python3 test.py").stdin("12", prompt=True).stdin("03", prompt=True).stdin("1999", prompt=True).stdout('13/3/1999', 'Le jour suivant est: 13/3/1999\n').exit()