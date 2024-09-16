import check50

@check50.check()
def testcs50():
    """Une entrée de \"This is CS50\" devrait donner une sortie de \"This...is...CS50\""""
    check50.run("python3 test.py").stdin("This is CS50", prompt=False).stdout(r"This\.\.\.is\.\.\.CS50|This…is…CS50", "This...is...CS50").stdout(r"hhis\.\.\.is\.\.\.CS50|This…is…CS50", "hhis...is...CS50").exit()

@check50.check()
def testfunctions():
    """Une entrée de \"This is our week on functions\" devrait donner une sortie de \"This...is...our...week...on...functions\""""
    check50.run("python3 test.py").stdin("This is our week on functions", prompt=False).stdout(r"This\.\.\.is\.\.\.our\.\.\.week\.\.\.on\.\.\.functions|This…is…our…week…on…functions", "This...is...our...week...on...functions").stdout(r"hhis\.\.\.is\.\.\.our\.\.\.week\.\.\.on\.\.\.functions|This…is…our…week…on…functions", "hhis...is...our...week...on...functions").exit()

@check50.check()
def testimplemented():
    """Une entrée de \"Let's implement a function called hello\" devrait donner une sortie de \"Let's...implement...a...function...called...hello\""""
    check50.run("python3 test.py").stdin("Let's implement a function called hello", prompt=False).stdout(r"Let's\.\.\.implement\.\.\.a\.\.\.function\.\.\.called\.\.\.hello|Let's…implement…a…function…called…hello", "Let's...implement...a...function...called...hello").stdout(r"eet's\.\.\.implement\.\.\.a\.\.\.function\.\.\.called\.\.\.hello|Let's…implement…a…function…called…hello", "eet's...implement...a...function...called...hello").exit()