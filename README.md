# mathParser
mathparser@1.0.0 test /home/travis/build/rslyshynskyi/mathParser
> mocha
  parser for math expression
    ✓ should return 3 for 1+2
    ✓ should return 3 for (1+2)
    ✓ should return 3.1 for 1.1+2
    ✓ should return 2 for 3-1
    ✓ should return 2 for (3-1)
    ✓ should return 2.1 for 3.1-1
    ✓ should return 4 for 2*2
    ✓ should return 4 for (2*2)
    ✓ should return 4.2 for 2.1*2
    ✓ should return 0.5 for 1/2
    ✓ should return 0.5 for (1/2)
    ✓ should return 0.55 for 1.1/2
    ✓ should return 25.5 for 1/2 + 5 + 4*5
    ✓ should return 45.5 for 1/2 + (5 + 4) * 5
    ✓ should return 45.5 for 1/2    + (5 + 4) * 5
    ✓ should return 52.52 for 1/2 + (5.5 + 4.7) * 5.1
    ✓ should return -52.52 for -1/2 + (-5.5 - 4.7) * 5.1
    ✓ should return 1.67 for 1+2/3
    ✓ should return 0 for 0
    ✓ should return 18 for 18
    ✓ should return undefined for (1/2 + 5 + 4*5
    ✓ should return undefined for 1/2 ++ 5 + 4) * 5
  22 passing (25ms)
The command "npm test" exited with 0.
Done. Your build exited with 0.
