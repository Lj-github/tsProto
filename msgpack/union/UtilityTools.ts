// TypeScript file
class UtilityTools{
    public static seekNodeByName(parent,childName){
        if (parent==null || childName == null){ return }

        return parent[childName]
    }
}