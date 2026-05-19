// Fix for sync logic race condition
function syncData() {
    if (isLocked) return;
    isLocked = true;
    // perform sync
    isLocked = false;
}
