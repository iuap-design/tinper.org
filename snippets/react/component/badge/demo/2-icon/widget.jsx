import { Badge } from 'tinper-bee';
function demo1 () {
    return (
        <div className="demo-badge">
            <Badge colors="primary">
            	<i className="uf uf-bellmusicaltool"></i>
            </Badge>
            <Badge colors="info">
            	<i className="uf uf-femalesilhouette"></i>
            </Badge>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactBadgeDemo2'));
