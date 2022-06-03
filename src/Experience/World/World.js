import * as THREE from "three";
export default class World {
	constructor(experience) {
		this.experience = experience;
		this.scene = this.experience.scene;

		//test
		const testMesh = new THREE.Mesh(
			new THREE.BoxGeometry(1, 1, 1),
			new THREE.MeshBasicMaterial({ wireframe: true })
		);
		this.scene.add(testMesh);
	}
}
