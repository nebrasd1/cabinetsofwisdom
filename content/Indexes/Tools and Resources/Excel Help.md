# If cells are merged, but need to sort
- Unmerge
- Select column, ctrl+g, special, blanks
- type in =
- ctrl-up arrow
- ctrl+enter
- That should fill them in with whatever was above

# If you want to highlight alternate merged rows
- Conditional Formatting
- New rule.. use a formula
- =MOD(COUNTA($A1:$A$2),2)=0

