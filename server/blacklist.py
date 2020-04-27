"""
blacklist.py

This file contains the blacklist of the JWT tokens–it will be imported by
app and the logout resource so that tokens can be added to the blacklist when the
user logs out.
"""

BLACKLIST = set()