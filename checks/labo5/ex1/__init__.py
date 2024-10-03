import check50

@check50.check()
def test1():
    check50.run("python3 test.py").stdin("5", prompt=True).stdin("2", prompt=True).stdin("9", prompt=True).stdout('2', 'Le minimum est: 2').stdout('9', 'Le maximum est: 9').exit()

@check50.check()
def test2():
    check50.run("python3 test.py").stdin("18", prompt=True).stdin("35", prompt=True).stdin("78", prompt=True).stdout('18', 'Le minimum est: 18').stdout('78', 'Le maximum est: 78').exit()

