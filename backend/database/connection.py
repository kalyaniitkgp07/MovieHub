import torndb
from config import DB_CREDENTIAL


def dbConnection():
    return torndb.Connection(
        DB_CREDENTIAL['HostName'],
        DB_CREDENTIAL['Database'],
        user=DB_CREDENTIAL['User'],
        password=DB_CREDENTIAL['Password']
    )
