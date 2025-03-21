import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { ForumPost } from "./forum-post.entity"
import { User } from "src/users/entities/user.entity"

@Entity("forum_comments")
export class ForumComment {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "text" })
  content: string

  @Column({ default: 0 })
  likes: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  // Many-to-One relationships
  @ManyToOne(
    () => User,
    (user) => user.forumComments,
    { nullable: false },
  )
  @Index()
  author: User

  @ManyToOne(
    () => ForumPost,
    (post) => post.comments,
    { nullable: false, onDelete: "CASCADE" },
  )
  @Index()
  post: ForumPost
}

